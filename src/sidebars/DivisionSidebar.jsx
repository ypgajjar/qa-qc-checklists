import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// TEMP hard‑coded; will be generated
const nav = [
  {
    division: "01 – GENERAL",
    pages: [
      { title: "Project Startup", slug: "project-startup" },
      { title: "Submittal QAQC", slug: "submittal-qaqc" },
    ],
  },
  {
    division: "26 – ELECTRICAL",
    pages: [
      { title: "Lighting QAQC", slug: "lighting-qaqc" },
      { title: "Cable Tray QAQC", slug: "cable-tray-qaqc" },
    ],
  },
];

export default function DivisionSidebar() {
  return (
    <aside className="w-64 border-r overflow-y-auto bg-gray-50">
      {nav.map((sec) => (
        <Disclosure key={sec.division} defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between px-4 py-2 text-left text-xs font-semibold tracking-wide uppercase">
                {sec.division}
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel as="ul" className="mb-2 space-y-1">
                {sec.pages.map((p) => (
                  <li key={p.slug}>
                    <NavLink
                      to={`/checklists/${p.slug}`}
                      className={({ isActive }) =>
                        `block px-6 py-1 ${
                          isActive ? "bg-blue-100 text-blue-700" : ""
                        }`
                      }
                    >
                      {p.title}
                    </NavLink>
                  </li>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </aside>
  );
}
