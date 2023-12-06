import './index.scss'

export const Alert = () => {
  return (
    <div className='alert'>
        <h3 className='modal-title'>¿Desea eliminar el registro?</h3>
        <div className='button-group'>
            <button className='modal-si'>Sí</button>
            <button className='modal-no'>No</button>
        </div>
    </div>
  )
}