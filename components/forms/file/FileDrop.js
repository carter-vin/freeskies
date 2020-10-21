import { useEffect, useRef, useState } from 'react';
import { FileDrop as FileDropWrapper } from 'react-file-drop';
import styles from './styles/file-drop.module.scss';
import { FileFilled, DeleteFilled } from '@ant-design/icons';

export default function FileDrop({ onChange, files }) {
  const [fileStorage, setFileStorage] = useState([]);
  const fileInputRef = useRef(null);

  const handleChangeFileStorage = (newFiles) => {
    const fileArr = [...newFiles];

    setFileStorage((state) => [...state, ...fileArr]);
  };

  const handleRemoveFile = (index) => {
    const cpFilesArr = [...files];

    cpFilesArr.splice(index, 1);

    setFileStorage(cpFilesArr);
  };

  const onFileInputChange = (event) => {
    const fileFromInput = event.target.files;
    handleChangeFileStorage(fileFromInput);
  };

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (onChange) onChange(fileStorage);
  }, [fileStorage]);

  return (
    <div>
      <FileDropWrapper
        onTargetClick={onTargetClick}
        onDrop={(files, event) => {
          handleChangeFileStorage(files);
        }}
        onDragLeave={() => console.log('onDragLeave')}
        onDragOver={() => console.log('onDragOver')}
      >
        <div className={styles.content}>
          <span className={styles.icon}>
            <FileFilled />
          </span>
          <span className={styles.text}>Select/Drop media</span>
        </div>
        <input
          onChange={onFileInputChange}
          ref={fileInputRef}
          type="file"
          className="hidden"
        />
      </FileDropWrapper>

      <div className={styles.file_list}>
        {fileStorage.map((item, index) => (
          <div key={index} className={styles.file_item}>
            <span className={styles.icon}>
              <FileFilled />
            </span>
            <p className={styles.file_name}>{item.name}</p>
            <span
              className={styles.remove}
              onClick={() => handleRemoveFile(index)}
            >
              <DeleteFilled />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
