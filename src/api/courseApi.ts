import { handleResponse, handleError } from "./apiUtils";

const apiUrl = process.env.REACT_APP_API_URL + "/courses/";

export function getCourses() {
  return fetch(apiUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getCourseBySlug(slug: string) {
  return fetch(apiUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      return response.json()
        .then(courses => {
          if (courses.length !== 1) {
            throw new Error("Course not found: " + slug);
          }
          return courses[0];
        })
    })
    .catch(handleError);
}

export interface Course {
  id: string | null;
  title: string;
  slug: string;
  authorId: string | null;
  category: string;
}

export function saveCourse(course: Course) {
  return fetch(apiUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(course)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId: string) {
  return fetch(apiUrl + courseId, {
    method: "DELETE"
  })
    .then(handleResponse)
    .catch(handleError);
}

