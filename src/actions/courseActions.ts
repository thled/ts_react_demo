import dispatcher from "../appDispatcher";
import * as courseApi from '../api/courseApi';
import { Action } from "./actionTypes";

export type CreateCourseAction = {
  actionType: Action.CREATE_COURSE;
  course: courseApi.Course;
};

export type LoadCoursesAction = {
  actionType: Action.LOAD_COURSES;
  courses: courseApi.Course[];
};

export type DeleteCourseAction = {
  actionType: Action.DELETE_COURSE;
  courseId: string;
};

export function saveCourse(course: courseApi.Course) {
  return courseApi.saveCourse(course)
    .then((savedCourse: courseApi.Course) => {
      dispatcher.dispatch({
        actionType: course.id
          ? Action.UPDATE_COURSE
          : Action.CREATE_COURSE,
        course: savedCourse,
      } as CreateCourseAction);
    });
}

export function loadCourses() {
  return courseApi.getCourses()
    .then((courses: courseApi.Course[]) => {
      dispatcher.dispatch({
        actionType: Action.LOAD_COURSES,
        courses: courses,
      } as LoadCoursesAction);
    });
}

export function deleteCourse(courseId: string) {
  return courseApi.deleteCourse(courseId)
    .then(() => {
      dispatcher.dispatch({
        actionType: Action.DELETE_COURSE,
        courseId: courseId,
      } as DeleteCourseAction);
    });
}

