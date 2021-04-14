import React from 'react'

const TableData = (props) => {
    return (
        <tr>
            <td>{props.data.kelurahan}</td>
            <td>{props.data.tidakDanBelumSekolah}</td>
            <td>{props.data.tidakDanBelumTamatSD}</td>
            <td>{props.data.tamatSD}</td>
            <td>{props.data.tamatSMP}</td>
            <td>{props.data.tamatSMA}</td>
            <td>{props.data.diploma1}</td>
            <td>{props.data.diploma3}</td>
            <td>{props.data.diploma4_s1}</td>
            <td>{props.data.strata2}</td>
            <td>{props.data.strata3}</td>
            <td>
                <div className="btn-group" role="group" aria-label="...">
                   <button className="btn btn-default" onClick={() => props.remove(props.data._id)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span>Hapus</button>
                   <button className="btn btn-default" onClick={() => props.update(props.data)}><span className="glyphicon glyphicon-edit" aria-hidden="true"></span>Update</button>
                </div>                
            </td>
        </tr>
    )
}

export default TableData