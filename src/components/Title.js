export function Title(props) {
  return (
    <div className="flex items-center text-font-200">
        <hr className="w-4"/>
      <span className="tracking-[2.59479px] ml-2 ">{props.title}</span>
    </div>
  );
}
