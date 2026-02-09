import { useEffect, useRef } from 'react';

export default function UnicornSticky() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      !function(){
        var u=window.UnicornStudio;
        if(u&&u.init){
          if(document.readyState==="loading"){
            document.addEventListener("DOMContentLoaded",function(){u.init()})
          }else{
            u.init()
          }
        }else{
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js",
          i.onload=function(){
            if(document.readyState==="loading"){
              document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})
            }else{
              UnicornStudio.init()
            }
          },
          (document.head||document.body).appendChild(i)
        }
      }();
    `;

    document.body.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-0 right-0 z-50 w-[200px] h-[92.5px] md:w-[400px] md:h-[185px] origin-bottom-right"
    >
      <div
        data-us-project="LXmaV1BweOV2tJWfb7FJ"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
