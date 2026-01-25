import roles from "../../data/roles";
import "./index.css";

function Organization() {
    return(
        <>
            <main className="organization-page">

            <div className="org-table">
                <div className="org-header">
                <div>Name</div>
                <div>Role</div>
                </div>

                {roles.map((role, index) => (
                <div className="org-row" key={index}>
                    <div className="org-name">{role.name}</div>
                    <div className="org-title">{role.title}</div>
                </div>
                ))}
            </div>
            </main>
        </>      
    )
}

export default Organization;