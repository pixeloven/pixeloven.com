type Team = {
    id: string
    logo: string
    name: string
    city: string
}

type Teams = Array<Team>;

interface HockeyTeamItemProps {
    team: Team;
}

interface HockeyListProps {
    teams: Teams;
}

function HockeyTeamItem(props: HockeyTeamItemProps) {
    const {
        team
    } = props;
    return (
        <li className="py-4 flex">
        <img className="h-10 w-10 rounded-full" src={team.logo} alt="" />
        <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{team.name}</p>
            <p className="text-sm text-gray-500">{team.city}</p>
        </div>
        </li>
    )
}
  
export default function HockeyTeamList(props: HockeyListProps) {
    const {
        teams
    } = props;
    return (
        <ul className="divide-y divide-gray-200">
        {teams.map((team) => <HockeyTeamItem key={team.id} team={team} />)}
        </ul>
    )
}