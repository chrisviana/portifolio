export function Footer() {
    const years = new Date().getFullYear()
    return (
        <div className="flex justify-center items-center mt-8">
            <p className="text-[10px] text-font-200">Copyright © {years} Christian Viana</p>
        </div>
    )
}