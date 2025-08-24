import {
  Knowledge,
  KnowledgeItem,
  KnowledgeList,
  KnowledgeListItem,
  KnowledgeTitle
} from '@/components/knowledge'
import { Title } from '@/components/title'
import { knowledge } from '@/data'

export function KnowledgeSection() {
  return (
    <div className='mb-16 flex w-full max-w-7xl flex-col items-center px-8 xs:px-12 sm:px-16 md:px-20 lg:px-12 xl:px-0'>
      <Title
        title="Knowledge"
        className="mb-24"
      />
      <Knowledge>
        {knowledge.map(({ title, items }) => (
          <KnowledgeItem key={title}>
            <KnowledgeTitle>{title}</KnowledgeTitle>
            <KnowledgeList>
              {items.map(({ label, icon }) => (
                <KnowledgeListItem
                  key={label}
                  label={label}
                  icon={icon}
                />
              ))}
            </KnowledgeList>
          </KnowledgeItem>
        ))}
      </Knowledge>
    </div>
  )
}
