import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/charts/Chart"
import Featured from "../../components/featured/Featured"
import Widget from "../../components/widget/Widget"
import "./home.scss"

export default function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>
            </div>
            <div className="charts">
                <Chart />
                <Featured />
            </div>
        </div>
    )
}


