import { memo, type ReactNode } from "react";

export interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  getKey: (item: T) => string | number;
  className?: string;
}

function ItemList<T>({
  items,
  renderItem,
  getKey,
  className,
}: ItemListProps<T>) {
  return (
    <ul style={{ margin: 0 }} className={className}>
      {items.map((item) => (
        <li key={getKey(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export const MemoItemList = memo(ItemList) as typeof ItemList;
