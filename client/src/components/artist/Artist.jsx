import { A, useParams } from "@solidjs/router";
import "./style.css";
import { For, createResource } from "solid-js";
import { setCurrentAlbum } from "../../store";
import { fetchAlbum } from "../../api/album";

function Artist() {
  const { id } = useParams();
  const [albums] = fetchAlbum(id);

  console.log(albums());
  return (
    <div>
      <For each={albums()}>
        {({ _id, title, description, songs }) => (
          <A href={`/albums/${id}/${title}`}>
            <h2>{title}</h2>
            {/* <p>{description}</p> */}
            {/* <For each={songs}> */}
            {/*   {({ title: songTitle, length }) => ( */}
            {/*     <p> */}
            {/*       <span>{songTitle} </span> */}
            {/*       <span>{length} </span> */}
            {/*     </p> */}
            {/*   )} */}
            {/* </For> */}
          </A>
        )}
      </For>
    </div>
  );
}

export default Artist;
