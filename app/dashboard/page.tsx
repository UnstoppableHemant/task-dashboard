import React from 'react'
import Header from '../components/header'
import SideNav from '../components/sideNav'
import Input from '../components/input'
import Image from 'next/image'
import Button from '../components/button'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-6'>
        <SideNav />
        <div className='p-2 col-span-5'>
          <div className='grid grid-cols-3 p-2'>
            <div className='flex gap-8 col-span-2'><h1>Add New Post</h1>
              <h1>Add Content</h1>
              <h1>Settings</h1></div>
            <div><Input
              label=""
              type="search"
              placeholder="Search Content"
            /></div>
          </div>
          <div className='p-2 grid grid-cols-4 gap-6'>
            <div className='flex p-4 shadow rounded-lg'>
              <div><Image
              src=""
              alt="Total Sales"
              /></div>  
              <div><h3>Total Sales</h3>
              <h1>$2,456</h1></div>
            </div>
            <div className='flex p-4 shadow rounded-lg'>
              <div><Image
              src=""
              alt="Total Expenses"
              /></div>  
              <div><h3>Total Expenses</h3>
              <h1>$3,326</h1></div>
            </div>
            <div className='flex p-4 shadow rounded-lg'>
              <div><Image
              src=""
              alt="Total Visitors"
              /></div>  
              <div><h3>Total Visitors</h3>
              <h1>$5,325</h1></div>
            </div>
            <div className='flex p-4 shadow rounded-lg'>
              <div><Image
              src=""
              alt="Total Sales"
              /></div>  
              <div><h3>Total Orders</h3>
              <h1>$1,326</h1></div>
            </div>
          </div>
          <div className='p-2'>
            <div className='p-4 shadow'>
            <div className='my-2'>
              <h1 className='text-xl'>Form Title</h1>
              <p>Sed tortor, sed velit ridiculus ipsum phartera lacus odio gravida augue enim.</p>
            </div>
            <div className='shadow p-3'>
              <p>Senectus malesuada suspendisse bibendum elit amet vitae.</p>
            </div>
            <div className='mt-6 w-full rounded-lg shadow-md'>
            <table className="w-full p-3 table-auto" >
              <thead className='text-left'>
                <tr>
                  <th>Table Title</th>
                  <th>Table Title</th>
                  <th>Table Title</th>
                  <th>Table Title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Etiam purus in</td>
                  <td>Curabitur donec dius</td>
                  <td>Marbi phartera, accusman</td>
                  <td className='flex gap-2'>
                    <Button btnName="Edit" btnStyle="bg-[#1F51FF] text-white"/>
                    <Button btnName="Delete" btnStyle="bg-[#FFAE42] text-white"/>
                  </td>
                </tr>
                <tr>
                  <td>Etiam purus in</td>
                  <td>Curabitur donec dius</td>
                  <td>Marbi phartera, accusman</td>
                  <td className='flex gap-2'>
                    <Button btnName="Edit" btnStyle="bg-[#1F51FF] text-white"/>
                    <Button btnName="Delete" btnStyle="bg-[#FFAE42] text-white"/>
                  </td>
                </tr>
                <tr>
                  <td>Etiam purus in</td>
                  <td>Curabitur donec dius</td>
                  <td>Marbi phartera, accusman</td>
                  <td className='flex gap-2'>
                    <Button btnName="Edit" btnStyle="bg-[#1F51FF] text-white"/>
                    <Button btnName="Delete" btnStyle="bg-[#FFAE42] text-white"/>
                  </td>
                </tr>
                <tr>
                  <td>Etiam purus in</td>
                  <td>Curabitur donec dius</td>
                  <td>Marbi phartera, accusman</td>
                  <td className='flex gap-2'>
                    <Button btnName="Edit" btnStyle="bg-[#1F51FF] text-white"/>
                    <Button btnName="Delete" btnStyle="bg-[#FFAE42] text-white"/>
                  </td>
                </tr>
                <tr>
                  <td>Etiam purus in</td>
                  <td>Curabitur donec dius</td>
                  <td>Marbi phartera, accusman</td>
                  <td className='flex gap-2'>
                    <Button btnName="Edit" btnStyle="bg-[#1F51FF] text-white"/>
                    <Button btnName="Delete" btnStyle="bg-[#FFAE42] text-white"/>
                  </td>
                </tr>
                <tr>
                  <td>Etiam purus in</td>
                  <td>Curabitur donec dius</td>
                  <td>Marbi phartera, accusman</td>
                  <td className='flex gap-2'>
                    <Button btnName="Edit" btnStyle="bg-[#1F51FF] text-white"/>
                    <Button btnName="Delete" btnStyle="bg-[#FFAE42] text-white"/>
                  </td>
                </tr>
                <tr>
                  <td>Etiam purus in</td>
                  <td>Curabitur donec dius</td>
                  <td>Marbi phartera, accusman</td>
                  <td className='flex gap-2'>
                    <Button btnName="Edit" btnStyle="bg-[#1F51FF] text-white"/>
                    <Button btnName="Delete" btnStyle="bg-[#FFAE42] text-white"/>
                  </td>
                </tr>
                <tr>
                  <td>Etiam purus in</td>
                  <td>Curabitur donec dius</td>
                  <td>Marbi phartera, accusman</td>
                  <td className='flex gap-2'>
                    <Button btnName="Edit" btnStyle="bg-[#1F51FF] text-white"/>
                    <Button btnName="Delete" btnStyle="bg-[#FFAE42] text-white"/>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            <div className='w-full items-center text-center flex justify-between'>
              <div></div>
              <div className='flex gap-4 p-2'>
                <div className='px-2 border-2 rounded-md'> -- </div>
                <div className='px-2 border-2 rounded-md'>1</div>
                <div className='px-2 border-2 rounded-md'>2</div>
                <div className='px-2 border-2 rounded-md'>3</div>
                <div className='px-2 border-2 rounded-md'>4</div>
                <div className='px-2 border-2 rounded-md'>5</div>
                <div className='px-2 border-2 rounded-md'> ++ </div>
              </div>
              <div></div>
            </div>
            </div>
          </div>
          <div className='p-2'>
            <div className='p-4 shadow'>
            <div className='my-2'>
              <h1 className='text-xl'>Form Title</h1>
              <p>Sed tortor, sed velit ridiculus ipsum phartera lacus odio gravida augue enim.</p>
            </div>
            <div className='my-2 flex text-left w-48 gap-2'>
              <Button btnName="English" btnStyle="border-2" />
              <Button btnName="Turkey" btnStyle="border-2" />
            </div>
            <div className='my-4'>
              <div>
              <Input label="Label Title" type="text" placeholder="Placeholder Content" />
              </div>
              <div className='grid grid-cols-3'>
              <p>Label Title</p>
              <select><option>Choose</option></select>
              <Input label="Label Title" type="text" placeholder="Placeholder Content" />
              <Input label="Label Title" type="text" placeholder="Placeholder Content" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard