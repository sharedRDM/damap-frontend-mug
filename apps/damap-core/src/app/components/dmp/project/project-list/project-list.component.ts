import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  inject,
  ChangeDetectionStrategy,
  output,
} from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

import { BackendService } from '../../../../services/backend.service';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSelectionListChange,
  MatSelectionList,
  MatListOption,
  MatListItemTitle,
  MatListItemLine,
} from '@angular/material/list';
import { Project } from '../../../../domain/project';
import { SearchResult } from '../../../../domain/search/search-result';
import { MatLabel } from '@angular/material/form-field';
import { SearchFieldComponent } from '../../../../shared/search-field/search-field.component';
import { MatIcon } from '@angular/material/icon';
// CUSTOMIZATION MUG START
import { MatProgressBar } from '@angular/material/progress-bar';
// CUSTOMIZATION MUG END
import { MatTooltip } from '@angular/material/tooltip';
import { AsyncPipe, DatePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    MatLabel,
    SearchFieldComponent,
    MatSelectionList,
    MatListOption,
    MatListItemTitle,
    MatListItemLine,
    MatIcon,
    // CUSTOMIZATION MUG START
    MatProgressBar,
    // CUSTOMIZATION MUG END
    MatTooltip,
    AsyncPipe,
    DatePipe,
    TranslatePipe,
  ],
})
export class ProjectListComponent implements OnInit, AfterViewInit {
  private backendService = inject(BackendService);
  dialog = inject(MatDialog);

  readonly projectToSet = output<Project>();
  private _selectedProject: Project | null;

  @Input()
  get selectedProject(): Project {
    return this._selectedProject;
  }

  set selectedProject(project: Project | null) {
    this._selectedProject = project;
    if (project === null) {
      this.fetchRecommendedProjects();
    }
  }

  private searchTerms = new Subject<string>();
  searchResult$: Observable<SearchResult<Project>>;
  // CUSTOMIZATION MUG START
  loading = false;
  // CUSTOMIZATION MUG END

  ngOnInit(): void {
    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged((previous, current) => {
          if (previous === null && current === null) {
            // search for recommended projects
            return false;
          }
          return previous === current;
        }),
        switchMap((term: string) => {
          this.loading = true;
          return term === null || term.length === 0
            ? this.backendService.getRecommendedProjects()
            : this.backendService.getProjectSearchResult(term);
        }),
      )
      .subscribe((results) => {
        // CUSTOMIZATION MUG START
        this.loading = false;
        // CUSTOMIZATION MUG END
        this.searchResult$ = of(results);
      });
  }

  ngAfterViewInit(): void {
    this.fetchRecommendedProjects();
  }

  fetchRecommendedProjects(): void {
    this.search(null);
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  changeProject(event: MatSelectionListChange): void {
    this.projectToSet.emit(event.source.selectedOptions.selected[0]?.value);
  }
}
