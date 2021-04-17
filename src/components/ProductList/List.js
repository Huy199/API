import React, { Component } from 'react';

function List(props) {
  return (
    <div>
      <div className='panel panel-primary'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Danh sách sản phẩm</h3>
        </div>
        <div className='panel-body'>
          <table className='table table-bordered table-hover'>
            <thead>
              <tr>
                <th>STT</th>
                <th>Môn học</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>{props.children}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default List;
