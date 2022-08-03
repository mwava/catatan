import React from "react";
import {showFormattedDate} from "./init/data"



const CatatanProfil= ({title,body,createdAt,id,onDelete,onArchive})=>{
    return(
        <div className="catatan-profil">
            <h2 className="catatan-profile_title">{title}</h2>
            <p className="catatan-profile_createdAt">{showFormattedDate(createdAt)}</p>
            <h4 className="catatan-profile_body">{body}</h4>
            <button className='cbtn_hapus' onClick={()=>{onDelete(id)}}>CatatanHapus</button>
            <button className='cbtn_archive' onClick={()=>{onArchive(id)}}>CatatanArchive</button>
        </div>
        
        
    )
}


export default CatatanProfil