import { EventEmitter } from "events";
import { Action } from "../actions/actionTypes";
import { Course } from "../api/courseApi";
import dispatcher from "../appDispatcher";

const CHANGE_EVENT = "change";
let _courses: Course[] = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback: any) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback: any) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses(): Course[] {
    return _courses;
  }

  getCourseBySlug(slug: string): Course | undefined {
    return _courses.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

dispatcher.register((action: any) => {
  switch (action.actionType) {
    case Action.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case Action.UPDATE_COURSE:
      _courses = _courses.map((_course) =>
        _course.id === action.course.id ? action.course : _course
      );
      store.emitChange();
      break;
    case Action.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    default:
      break;
  }
});

export default store;

