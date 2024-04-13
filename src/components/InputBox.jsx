export function InputBox({label, placeholder, onChange}) {
    return <div>
      <div className="text-sm font-neutral text-slate-400 text-left py-2">
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} className="w-full bg-slate-100 px-2 py-1 border rounded border-slate-200" />
    </div>
}