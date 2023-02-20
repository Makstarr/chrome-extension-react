import { useEffect, useState } from 'react';

import { Button } from './components/button';
import { Modal } from './components/modal';

export default () => {
  const [selectedText, setSelectedText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const handleMouseUp = (event: MouseEvent) => {
      if ((event.target as Element).id !== 'my-button') {
        const text = window?.getSelection()?.toString() ?? '';
        setSelectedText(text);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {selectedText && (
        <Button
          id={'my-button'}
          onClick={() => {
            setIsModalVisible(true);
          }}
        />
      )}
      {isModalVisible && (
        <Modal
          selectedText={selectedText}
          onClose={() => {
            setIsModalVisible(false);
          }}
        />
      )}
    </>
  );
};
