import {MdCancel, MdCheck, MdDeleteForever} from 'react-icons/md'

const TodoList = ({markAction, restoreAction, checkState, listContent, deleteAction}) => {
  return (
    <div className="flex justify-between items-center py-4 px-3
      border-b-2 border-gray-200 rounded-tl-lg text-xl md:text-lg">
        <div className='flex items-center'>
            {
                checkState ? <MdCheck title='Cancel complete' className='h-5 w-5 mr-3 text-blue-700 cursor-pointer' onClick={()=>markAction()} />
                :  <MdCancel title='Mark as complete' className='h-5 w-5 mr-3 text-blue-700 cursor-pointer' onClick={()=>restoreAction()} />
            }
           <span className={`${checkState ? "line-through" : "line-through-none"}`}>{listContent}</span>
        </div>
        <MdDeleteForever title='Delete' className='h-6 w-6 mr-1 text-orange-400 cursor-pointer' onClick={()=>deleteAction()} />
    </div>
  )
}

export default TodoList
