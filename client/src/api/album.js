import { createResource } from "solid-js";
import { setCurrentAlbum } from "../store";

let resource
export function fetchAlbum(id) {
  if (!resource) {
  resource = createResource(fetcher(id));
  }
  return resource
}

function fetcher(id) {
  return async () => {
    try {
      const res = await fetch(
        `http://${import.meta.env.VITE_BE_HOST}:${import.meta.env.VITE_BE_PORT}/api/artists/${id}/albums`,
      );
      const json = await res.json();
      return json;
    } catch (error) {
      console.log("Could not fetch Albums", error);
    }
  };
}
