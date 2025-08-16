// import React from "react";

// const Test = () => {
//   return (
//     <div>
//       {/* <!-- Include Model Viewer Library --> */}
//       <div
//         type="module"
//         src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
//       ></div>

//       {/*  Embed the 3D Model */}
//       <model-viewer
//         src="person_model.glb"
//         alt="3D portrait"
//         camera-controls
//         auto-rotate
//         style="width: 600px; height: 600px;"
//       ></model-viewer>
//     </div>
//   );
// };

// export default Test;



import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    // Dynamically load the model-viewer script once on mount
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      {/* Embed the 3D Model */}
      <model-viewer
        src="person_model.glb"
        alt="3D portrait"
        camera-controls
        auto-rotate
        style={{ width: "600px", height: "600px" }}
      />
    </div>
  );
};

export default Test;
