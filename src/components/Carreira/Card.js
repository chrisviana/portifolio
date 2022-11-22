export function Card({ occupation, skills }) {
  return (
    <div className="sm:ml-28 sm:w-[39.125rem]">
      {
        occupation.map((occupations, i) => {
          return (<div>
            <p className="font-plus text-lg">{occupations.name}</p>
            <p className="text-font-200 text-xs mt-1">{occupations.time}</p>
            <div className="flex gap-4 mt-4">
              {skills.map((skill) => {
                return <p className="rounded border-solid border-fontbranca-200 border text-xs w-20 flex items-center justify-center px-2 py-1 text-font-200">{skill}</p>;
              })}
            </div>
            <div className="border-solid border-fontbranca-200 border-t mt-4">
              <p className="mt-4">{occupations.describe}</p>
            </div>
          </div>)
        })
      }




    </div>
  );
}
