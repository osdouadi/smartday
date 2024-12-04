import React from 'react'

type NewsTitleCellProps = {
  title: string
};

const NewsTitleCell: React.FC<NewsTitleCellProps> = ({title}) => {
  return (
    <p className='max-w-[800px] text-center'>{title}</p>
  )
}

export default NewsTitleCell