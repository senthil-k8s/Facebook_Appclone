import {React,useState} from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datasourcetable';
import { Link } from 'react-router-dom';

export default function Datatable() {

    const[data, setData] = useState(userRows);
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [ {field : "action", headerName:"ACTION", width : 200, renderCell:(params) => {
      return(
        <div className='cellAction'>
        <Link to="/users/test" style={{textDecoration:"none"}}>
          <div className="viewButton">View</div>
        </Link>
          <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
        </div>
      )
    }}];
     
  return (
    <div className='dataTable'>
        <div className="datatableTitle">
          Add New User
          <Link to="/users/new" style={{textDecoration:"none"}}>
            <div className='link'>Add New</div>
          </Link>
        </div>
        <DataGrid className='dataGrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
