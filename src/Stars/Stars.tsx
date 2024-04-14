import { Star } from '../Star/Star';

type Count = {
    count: number;
}

export const Stars = ({ count }: Count) => {
    if (!Number.isInteger(count) || count < 1 || count > 5) return null;
  let arr: any[] = [];

  for (let i = 0; i < count; i++) {
    arr.push(
      <li key={i}><Star /></li>
    );
  }

  return (
    <ul className="card-body-stars u-clearfix">
        {arr}
    </ul>
  )
}
