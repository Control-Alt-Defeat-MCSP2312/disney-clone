'use client'
import { useContext } from 'react';
import AppContext from '../context/context.jsx';

export default function ProductDetailsText() {
  const { isActive, isCollapsed, changeCollapsed } = useContext(AppContext)


  // Handler to update collapse state with read more button
  const handleCollapse = (e) => {
    changeCollapsed();
  }

  return (
    <div className="product-details-read-more relative block leading-normal">
      <div className={`wrapper-collapsed max-h-300px mb-15px overflow-hidden tracking-tight font-sans font-light text-lg text-zinc-grey leading-6 text-left ${isActive === "details" ? "after:absolute after:content-[''] after:w-full after:h-5 after:bg-white" : ""}`}>
        <p className="text-header visible text-xl leading-7 w-auto mb-0 pb-10px"></p>
        <p aria-hidden="false" className="visible mb-4">
          Relive the adventure of <em aria-hidden="false" className="visible">Star Wars: The Force Awakens </em>
          with some of your favorite heroes (and antihero) featured on this simulated leather backpack by Loungefly.
          Dramatic screen art on the front shows three different scenes inspired by the film: Poe Dameron on&nbsp;Ajan Kloss,
          Finn battling Kylo Ren on the Starkiller base, and Rey Skywalker with BB-8 on Jakku. Part of the Disney100 Decades:
          The 2010s Collection, this stylish carryall celebrates the film with style and substance thanks to a double zip main compartment,
          two front zip pockets, side slip pockets and interior lining featuring a repeat of the colorful screen art.&nbsp;&nbsp;
        </p>
        <p aria-hidden="false" className="separator visible mb-4 "></p>
        <label aria-hidden="false" className="prod-description-label visible font-500 mb-2 inline-block">Magic in the details</label>
        <p aria-hidden="false" className="prod-content visible mb-0 "></p>
        <ul aria-hidden="false" className="visible w-588px mb-4 list-disc list-inside">
          <li aria-hidden="false" className="visible">Simulated leather backpack</li>
          <li aria-hidden="false" className="visible">Screen art on front features scenes from <em> Star Wars: The Force Awakens</em></li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Characters include Poe Dameron, Finn and Kylo Ren, Rey Skywalker and BB-8</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible"><em>Star Wars: The Force Awakens</em> screen logo on back</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Double zipper main compartment</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Two front zip pockets</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Side slip pockets</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Loungefly logo metal pulls</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Goldtone hardware</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Adjustable straps with padded shoulders</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Top carry loop</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Same screen art featured on lining</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Disney100 Decades label on back</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible"><em>Star Wars</em> Loungefly logo label plate on front</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Inspired by<em> Star Wars: The Force Awakens</em> (2015)&nbsp;&nbsp;</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Part of the Disney100 Decades: The 2010s Collection</li>
          <li aria-hidden={`${isCollapsed ? "true" : "false"}`} className="invisible">Part of the Disney100 Celebration Collections</li>
        </ul>
        <p aria-hidden={`${isCollapsed ? "true" : "false"}`} className="separator hidden mb-4 "></p>
        <label aria-hidden={`${isCollapsed ? "true" : "false"}`} className="prod-description-label hidden font-semibold mb-2 inline-block">The bare necessities</label>
        <ul aria-hidden={`${isCollapsed ? "true" : "false"}`} className="hidden w-588px mb-4 list-disc list-inside">
          <li aria-hidden="false" className="visible">Polyurethane</li>
          <li aria-hidden="false" className="visible">Approx. 11 2/5'' x 13 3/4'' x 4 1/2''</li>
          <li aria-hidden="false" className="visible">Imported</li>
        </ul>
        <p aria-hidden={`${isCollapsed ? "true" : "false"}`} className="separator hidden mb-4 "></p>
        <p aria-hidden={`${isCollapsed ? "true" : "false"}`} className="prod-partnumber hidden mt-30px mb-5 text-prop-details-grey">
          <span aria-hidden="false" className="prod-partnumber__label visible mr-10px ">Item No.</span>
          <span aria-hidden="false" className="prod-partnumber__text visible">442031181363</span>
        </p>
      </div>
      <div className={`readmore-link absolute flex w-full items-end underline ${isCollapsed ? "bg-read-more-gradient h-113px bottom-2" : "h-auto bottom-neg-15"}`}>
        <button type="button" onClick={handleCollapse} className="read-more-btn relative bottom-neg-30px text-lg leading-6 font-extralight text-deep-grey text-left cursor-pointer overflow-visible rounded-none">
          <span className={`read-more block h-full ${isCollapsed ? "visible" : "hidden"}`}>Read More</span>
          <span className={`read-less h-full ${isCollapsed ? "hidden" : "visible"}`}>Read Less</span>
        </button>
      </div>
    </div>
  )
}