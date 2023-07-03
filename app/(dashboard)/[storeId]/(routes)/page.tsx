import prismadb from "@/lib/prismadb";
import { FC } from "react";

interface DashboardProps {
    params: { storeId: string }
}

const Dashboard: FC<DashboardProps> = async ({ params }) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    })
    return (
        <div>
            Current store: {store?.name}
        </div>
    );
}

export default Dashboard;