import { useState } from 'react';
import data from './Data';

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultipleSelection = (currentId) => {
    let copyMultiple = [...multiple];
    let findIndexOf = copyMultiple.indexOf(currentId);

    if (findIndexOf === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(findIndexOf, 1);
    setMultiple(copyMultiple);
  };

  return (
    <div className='flex flex-col h-screen w-full justify-center items-center'>
      <button
        className='bg-red-500 text-white p-3 rounded-lg text-md hover:scale-105 transition hover:ease-in-out'
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        {enableMultipleSelection ? '一つ選択を有効にする' : '複数選択を有効にする'}
      </button>
      <div className='w-[500px]'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className='bg-[#159aa3] mt-2.5 px-2.5 py-5 ease-in-out duration-300 transition-transform'
            >
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className='text-white flex justify-between items-center cursor-pointer'
              >
                <h3 className='text-xl'>{dataItem.question}</h3>
                <span className='text-lg hover:scale-110'>+</span>
              </div>

              {/* Answer section with smooth animation */}
              <div
                className={`text-[#FFF1DB] mt-2 align-super transition-all duration-500 ease-in-out ${enableMultipleSelection
                  ? multiple.indexOf(dataItem.id) !== -1
                    ? 'max-h-[500px] ease-in-out'
                    : 'max-h-0 ease-out'
                  : selected === dataItem.id
                    ? 'max-h-[500px] ease-in-out'
                    : 'max-h-0 ease-out'
                  }`}
                style={{ overflow: 'hidden' }}
              >
                <div>{dataItem.answer}</div>
              </div>
            </div>
          ))
        ) : (
          <div>No data is found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
