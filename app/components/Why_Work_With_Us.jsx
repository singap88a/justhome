import { FaFileInvoiceDollar, FaHome, FaShieldAlt } from 'react-icons/fa';

const Why_Work_With_Us = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why You Should Work With Us</h2>
        <p className="text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            {/* Icon placeholder for Wide Range of Properties */}
            <div className="mb-4">
              <FaFileInvoiceDollar size={64} color="#333" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Wide Range of Properties</h3>
            <p className="text-gray-500">We offer expert legal help for all related property items in Dubai.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            {/* Icon placeholder for Buy or Rent Homes */}
            <div className="mb-4">
              <FaHome size={64} color="#333" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Buy or Rent Homes</h3>
            <p className="text-gray-500">We sell your home at the best market price and very quickly as well.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            {/* Icon placeholder for Trusted by Thousands */}
            <div className="mb-4">
              <FaShieldAlt size={64} color="#333" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Trusted by Thousands</h3>
            <p className="text-gray-500">We offer you free consultancy to get a loan for your new home.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why_Work_With_Us; 