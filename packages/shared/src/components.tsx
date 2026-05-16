import { Fragment, type ReactNode } from "react";

interface DataStateProps<T> {
  data: T[] | null;
  loading: boolean;
  error?: string | null;
  renderItem: (item: T) => ReactNode;
  emptyState?: ReactNode;
}

export function DataStateList<T>({
  data,
  loading,
  error,
  renderItem,
  emptyState = "No data available"
}: DataStateProps<T>): ReactNode {
  if (loading) {
    return "Loading...";
  }

  if (error) {
    return `Error: ${error}`;
  }

  if (!data || data.length === 0) {
    return emptyState;
  }

  return <>{data.map((item, index) => <Fragment key={index}>{renderItem(item)}</Fragment>)}</>;
}
