import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../components/Cards/TitleCard"
import { showNotification } from '../features/common/headerSlice'
import MomentJalali from "moment-jalaali"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../utils/globalConstantUtil'
import { openModal } from "../features/common/modalSlice"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { setPageTitle } from '../features/common/headerSlice'


// load icons
import DeleteIcon from '@iconscout/react-unicons/icons/uil-trash-alt'
import EditIcon from '@iconscout/react-unicons/icons/uil-edit-alt'

import UpdateAdmin from "../features/admins/UpdateAdmin"


const TopSideButtons = () => {

  const dispatch = useDispatch()

  const createNewUser = () => {
    // dispatch(showNotification({ message: "Add New Member clicked", status: 1 }))
    dispatch(openModal({ title: "ایجاد ادمین جدید", bodyType: MODAL_BODY_TYPES.ADD_NEW_ADMIN }))
  }



  // return (
  //     <div className="inline-block float-right">
  //         <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => createNewUser()}>ایجاد کاربر جدید</button>
  //     </div>
  // )
}


const TEAM_MEMBERS = [
  { name: "ملک دار یک", avatar: "https://cdn-icons-png.flaticon.com/128/4035/4035183.png", email: "example@admin.test", role: "Owner", joinedOn: MomentJalali(new Date()).add(-5 * 1, 'days').format("jYYYY/jMM/jDD"), lastActive: "5 hr ago" },
  { name: "ملک دار دو", avatar: "https://cdn-icons-png.flaticon.com/128/1830/1830878.png", email: "example@admin.test", role: "Admin", joinedOn: MomentJalali(new Date()).add(-5 * 2, 'days').format("jYYYY/jMM/jDD"), lastActive: "15 min ago" },
  { name: "ملک دار سه", avatar: "https://cdn-icons-png.flaticon.com/128/10551/10551576.png", email: "example@admin.test", role: "Admin", joinedOn: MomentJalali(new Date()).add(-5 * 3, 'days').format("jYYYY/jMM/jDD"), lastActive: "20 hr ago" },
  { name: "ملک دار چهار", avatar: "https://cdn-icons-png.flaticon.com/128/6763/6763342.png", email: "example@admin.test", role: "Manager", joinedOn: MomentJalali(new Date()).add(-5 * 4, 'days').format("jYYYY/jMM/jDD"), lastActive: "1 hr ago" },
  { name: "ملک دار پنج", avatar: "https://cdn-icons-png.flaticon.com/128/2934/2934121.png", email: "example@admin.test", role: "Support", joinedOn: MomentJalali(new Date()).add(-5 * 5, 'days').format("jYYYY/jMM/jDD"), lastActive: "40 min ago" },
  { name: "ملک دار شش", avatar: "https://cdn-icons-png.flaticon.com/128/5190/5190547.png", email: "example@admin.test", role: "Support", joinedOn: MomentJalali(new Date()).add(-5 * 7, 'days').format("jYYYY/jMM/jDD"), lastActive: "5 hr ago" },

]

const updateUser = () => {
  alert("update user")
}



const deleteUser = () => {
  Swal.fire({
    title: "آیا از حذف ادمین اطمینان دارید؟",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "بله",
    denyButtonText: `خیر`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("ادمین حذف شد!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("تغییرات ذخیره نشد", "", "info");
    }
  });
}

const Support = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle({ title: "غذادارها" }))
  }, [])

  const [members, setMembers] = useState(TEAM_MEMBERS)

  return (
    <>
        در حال ساخت ...
    </>
)
}

export default Support