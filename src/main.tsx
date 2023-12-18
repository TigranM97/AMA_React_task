import { createRoot } from "react-dom/client";
import App from "./App";

if (import.meta.env.MODE  ===  'development') {
  const  renderElement  =  document.getElementById('root');
  createRoot(renderElement  as  HTMLElement).render(
    <App options={{}}/>
  );
} else {
	window.DAMAGE_SELECTOR_API  = {
		init: (options: {selector?: string}) => {
			const { selector } = options;

			if (selector) {
				const  renderElement = document.querySelector(selector);
				if (renderElement) {
					createRoot(renderElement as HTMLElement).render(
						
							<App options={options}  />
						
					);
				}
			}
		}
	};
}