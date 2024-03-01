import React from 'react';
import "./admin.css"
const Admin = () => {
    return (
        <section id='admin'>
           <div className="container">
            <div className="admin">
                <h1>ADIDASS</h1>
              <div className="admin_tops">
              <div className="admin_img">
                    <input type="text" placeholder='img ...'/>
                </div>
                <div className="admin_input">
                    <input type="text" placeholder='name ...'/>
                    <input type="text" placeholder='model ...'/>
                    <input type="text" placeholder='season ...'/>
                    <input type="text" placeholder='material ...'/>
                    <input type="text" placeholder='state ...'/>
                    <div className="admin_input_pcs">
                    <input type="text" placeholder='price ...'/>
                    <input type="text" placeholder='color ...'/>
                    <input type="text" placeholder='size ...'/>
                    </div>
              </div>
                </div>
                <button>create</button>
            </div>
           </div> 
        </section>
    );
};

export default Admin;