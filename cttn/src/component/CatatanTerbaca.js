import React from "react";
import CatatanProfil from "./CatatanProfil";




const CatatanBodyProfil =({id,title,createdAt,body,archived,onDelete,onArchive})=>{
    
    return(
        <div className="catatan-body_profil">
            <CatatanProfil id={id}  title={title} createdAt={createdAt} body={body} archived={archived} onDelete={onDelete} onArchive={onArchive}/>
          
        </div>
    )
}


export default CatatanBodyProfil