import React from 'react';
import styled from 'styled-components';
import { KeyboardArrowLeft } from 'styled-icons/material/KeyboardArrowLeft';
import { KeyboardArrowRight } from 'styled-icons/material/KeyboardArrowRight';
import PropTypes from 'prop-types';

const PaginationContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  float: right;
  padding: 15px;
  font-size: 0.75rem;
  color: #737373;
  user-select: none;
`;

const ControlsContainer = styled.div`
  margin-right: 30px;
`;

const StyledSelect = styled.select`
  border: none;
  color: #737373;
  font-size: 0.75rem;
  margin-left: 8px;
  margin-right: 30px;

  :focus {
    outline: none;
  }
`;

const Pagination = ({
  count,
  page,
  onChangePage,
  onChangeRowsPerPage,
  rowsPerPage,
}) => {
  const totalPages = Math.ceil(count / rowsPerPage) - 1;

  const handleIncrement = e => {
    if (page !== totalPages) onChangePage(e, page + 1);
  };

  const handleDecrement = e => {
    if (page !== 0) onChangePage(e, page - 1);
  };

  const handleChangeRows = e => {
    onChangeRowsPerPage(e);
  };

  return (
    <PaginationContainer>
      <ControlsContainer>
        <span> Rows per page: </span>
        <StyledSelect onChange={e => handleChangeRows(e)}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </StyledSelect>
        {rowsPerPage * page + 1}-{Math.min(count, (page + 1) * rowsPerPage)} of{' '}
        {count}
      </ControlsContainer>
      {/* <ControlsContainer>Page: {page + 1}</ControlsContainer> */}

      <KeyboardArrowLeft
        style={{ marginRight: '20px' }}
        size="1.5rem"
        color={page === 0 && '#dcdcdc'}
        onClick={e => handleDecrement(e)}
      />

      <KeyboardArrowRight
        size="1.5rem"
        color={page === totalPages && '#dcdcdc'}
        onClick={e => handleIncrement(e)}
      />
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
};

export default Pagination;
