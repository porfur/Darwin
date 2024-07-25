export default function (params) {
  return (
    <form>
      <input onKeyDown={handleKeyDown} />
    </form>
  );
}

  function handleKeyDown(e) {
    const input = e.currentTarget;
    if (input.value.length < 2) return;

  }


