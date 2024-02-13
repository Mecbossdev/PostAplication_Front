import LayoutComponent from '@/components/layout-component';

export interface ILayoutScreeningProps {
  children: React.ReactNode
}

export default function LayoutListing ({children}: ILayoutScreeningProps) {
  return (
    <div>
      <LayoutComponent>
        <div className='flex flex-col m-auto bg-gray-50 max-w-7xl p-2 rounded-md border mt-8 gap-2 dark:bg-primary-gray-900'>
          {children}
        </div>
      </LayoutComponent>
    </div>
  );
}