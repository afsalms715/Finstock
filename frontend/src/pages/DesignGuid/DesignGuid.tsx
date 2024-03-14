import Table from '../../components/Table/Table'
import RatioList from '../../components/RatioList/RatioList'
import { TestDataCompany } from '../../components/Table/TestData'

type Props = {}

type Company=typeof TestDataCompany[0];
const tableConfig = [
  {
    label: "Market Cap",
    render: (company: Company) => company.mktCap,
    subTitle: "Total value of all a company's shares of stock",
  },
]

const DesignGuid = (props: Props) => {
  return (
    <div>
        <h1>Design Guid</h1><br/>
        <h2>This is the page where will house various design aspect of our app</h2>
        <RatioList data={TestDataCompany[0]} config={tableConfig} />
        <Table data={TestDataCompany} config={tableConfig}/>
    </div>
  )
}

export default DesignGuid