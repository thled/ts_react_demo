export async function handleResponse(response: Response) {
  if (response.ok) {
    return response.json();
  } else {
    const error = await response.json();
    throw error;
  }
}

export function handleError(error: any) {
  console.error('API call failed:', error);
  throw error;
}

