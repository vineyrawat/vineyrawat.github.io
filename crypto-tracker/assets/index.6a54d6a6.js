import{R as e}from"./vendor.2bb48956.js";function r({children:r,isFullWidth:t,variant:a,isLoading:n,disabled:s,onClick:i,type:l,className:c,size:o}){const d="bg-primary text-white focus:bg-primaryDark dark:text-gray-800",u="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200",g=()=>{switch(o){case"sm":return["h-7 px-2 text-sm","w-4 h-4"];case"md":return["h-10 px-3 text-md","w-6 h-6"];case"lg":return["h-12 px-4 text-lg","w-7 h-7"];default:return["h-10 px-3 text-md","w-6 h-6"]}};return a=n?"bg-gray-100 dark:bg-gray-700 text-gray-600 cursor-not-allowed select-none":(()=>{switch(a){case"primary":return d;case"gray":return u;default:return d}})(),e.createElement(e.Fragment,null,e.createElement("button",{type:l,onClick:i,className:`flex items-center justify-center  ${g()[0]} font-semibold hover:opacity-90 tracking-wide focus:outline-none focus:ring-2 focus:ring-primary ${a} ${t?"w-full":"w-max"} ${c}`,disabled:!!n||s},n?e.createElement("div",{className:`${g()[1]} border-2 border-b-[transparent] rounded-full border-gray-400 animate-spin`}):r))}export{r as B};
