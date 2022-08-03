import React from "react";
import CatatanTerbaca from './CatatanTerbaca'

const CatatanTerbacaMap=({catatans,onDelete,onArchive})=>{
    

        
    return(
        <div className="catatan-list">
          
     
        {
            catatans.map((catatan) => (
            <CatatanTerbaca
            key={catatan.id}
            id={catatan.id} 
            
             onDelete={onDelete}
             onArchive={onArchive}
             
            {...catatan} />
          ))
     }
   
        </div>
    )
}

export default CatatanTerbacaMap