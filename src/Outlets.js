import { useRef, useState } from "react"

export const  Outlet=()=>{

    const [scrollpositio,setsccrollposition] =useState(0)
    const containerref= useRef()
return (
    <section>
<h1>Your Fabourate dishes</h1>
<div ref={containerref}>
    <div className="samplebox">
        {/* map */}
    </div>
</div>

    </section>
)
}