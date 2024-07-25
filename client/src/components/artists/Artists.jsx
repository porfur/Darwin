import { For, createEffect, createResource, createSignal } from "solid-js";
import "./style.css";
import { A } from "@solidjs/router";

function Artists(params) {
  const [artists] = createResource(fetchArtists);
  return (
    <section>
      <For each={artists()}>
        {({ _id, name }) => {
          return (
            <h2><A id={_id} href={`/albums/${_id}`}>
              {name}
            </A></h2>
          );
        }}
      </For>
    </section>
  );
}

export default Artists;

async function fetchArtists() {
  try {
    const res = await fetch(
      `http://${import.meta.env.VITE_BE_HOST}:${import.meta.env.VITE_BE_PORT}/api/artists`,
    );
    console.log(res);
    const json = await res.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log("Could not fetch Artists", error);
  }
}
