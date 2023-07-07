'use client'
import React, { useState } from "react";


const Accordion =({title = <></>, children,  })=>{
    const [collapsed, setCollapsed] = useState(true);
    return (
      <div
        tabIndex={0}
        className={`collapse ${
          collapsed ? 'collapse-close' : 'collapse-open'
        } bg-secondary text-secondary-content collapse-arrow border`}
      >
        <div
          onClick={(e) => {
            setCollapsed(!collapsed);
          }}
          className="collapse-title text-xl text-center font-medium"
        >
          {title}
        </div>
        <div className="collapse-content">
          <>{children}</>
        </div>
      </div>
    );
}


export default Accordion