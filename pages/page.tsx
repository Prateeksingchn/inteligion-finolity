import LatestNews from '../components/layout/LatestNews'; // Adjust the path as necessary
import UpcomingEvents from '../components/layout/UpcomingEvents'; // Adjust the path as necessary

export default function Page() {
    return (
        <div>
            {/* Other components like Industries */}
            <Industries />
            <LatestNews /> {/* Add the Latest News section here */}
            <UpcomingEvents /> {/* Add the Upcoming Events section here */}
            {/* Other components */}
        </div>
    );
} 