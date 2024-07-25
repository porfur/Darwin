import { useParams } from "@solidjs/router";
import { fetchAlbum } from "../../api/album";

export default function Album(params) {
  const { title } = useParams();
  const [albums] = fetchAlbum();
  const thisAlbum = albums().find((album) => album.title === title);
  return (
    <div>
      <p>{thisAlbum.description}</p>
      <ul>
        <For each={thisAlbum.songs}>
          {(song) => (
            <li>
              <span>{song.title}</span>
              <span>{song.length}</span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
