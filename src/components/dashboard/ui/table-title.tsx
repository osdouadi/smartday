import React from 'react'

type TableTitleProps = {
  title: string
};

const TableTitle: React.FC<TableTitleProps> = ({title}) => {
  return (
    <div className="pb-1.5 pt-7 flex justify-center items-center">
      <h2 className="text-lg md:text-2xl">{title}</h2>
    </div>
  );
}

export default TableTitle