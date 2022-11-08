import NavLink from "@atoms/nav-link"
import { ITEM_NAVLINK_FOOTER } from "@constants/footer.constant"

const classActive =
  "p-3 text-center font-bold flex flex-col gap-2 items-center justify-center text-primary-600 bg-gray-300/70 font-size--14 rounded-lg"
const classInactive =
  "px-3 py-4 text-center font-bold rounded-lg flex flex-col gap-2 items-center justify-center text-gray-600/70 font-size--12"
// const classActive =
//   "m-2 p-3 text-center font-bold rounded-lg flex flex-col gap-2 items-center justify-center text-primary-600 bg-gray-300/70 font-size--14"
// const classInactive =
//   "m-2 px-3 py-4 text-center font-bold rounded-lg flex flex-col gap-2 items-center justify-center text-gray-600/70 font-size--12"

// container mx-auto bg-white py-2 sticky bottom-0 px-2 grid grid-cols-3 border-t border-t-gray-600/50 rounded-t-3xl
const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 md:hidden">
      <div className="container mx-auto bg-white sticky bottom-0 grid grid-cols-3 border-t border-t-gray-600/50 rounded-t-3xl overflow-hidden">
        {ITEM_NAVLINK_FOOTER.map(({ id, name, href, icon }) => {
          return (
            <NavLink
              key={id}
              href={href}
              classActive={classActive}
              classInactive={classInactive}
              classIcon={"w-5"}
              name={name}
              icon={icon}
            />
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
